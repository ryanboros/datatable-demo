import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Divider, Row, Select, Table, Typography } from "antd";

import BatchesState, { getStatusOptions } from "./BatchesState";
import batchesColumns from "./BatchesTableColumns";
import BatchModal from "./BatchModal";

const BatchesView = () => {
  /**
   * STATE
   **/
  const [filter, setFilter] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [batch, setBatch] = useState({});

  /**
   * REDUX DATA
   **/
  const dispatch = useDispatch();
  const { fetchBatches } = BatchesState.actionCreators;
  const batches = useSelector(BatchesState.selectors.getBatches);
  const isLoading = useSelector(BatchesState.selectors.isBatchesLoading);
  const error = useSelector(BatchesState.selectors.getError);

  /**
   * EFFECTS
   **/
  useEffect(() => {
    dispatch(fetchBatches());
  }, [dispatch, fetchBatches]);

  /**
   * INTERNAL METHODS
   **/
  const _onSelectFilter = (value) => {
    setFilter(value);
  };

  const _onClearFilter = () => {
    setFilter(null);
  };

  const _onSelectBatch = (row) => {
    setBatch(row);
    setShowModal(true);
  };

  const _onHideModal = () => {
    setBatch({});
    setShowModal(false);
  };

  const getFilteredBatches = () => {
    if (!batches) return [];
    if (!filter) return batches;

    return batches.filter((b) => b.status === filter);
  };
  /**
   * RENDER
   **/
  const { Title } = Typography;
  const { Option } = Select;

  const statusOptions = getStatusOptions();
  const filteredBatches = getFilteredBatches();

  return (
    <div className="site-layout-content">
      <Title level={4}>Batches</Title>
      {error && (
        <Alert message={error} type="error" style={{ marginBottom: "1em" }} />
      )}
      <Row justify="end" align="middle">
        <span>Status:</span>
        <Select
          onChange={_onSelectFilter}
          onClear={_onClearFilter}
          style={{ width: 150, marginLeft: "1em" }}
          allowClear
        >
          {statusOptions.map((s, i) => (
            <Option key={i} value={s.value}>
              {s.label}
            </Option>
          ))}
        </Select>
      </Row>
      <Divider orientation="left" />
      <Table
        dataSource={filteredBatches}
        columns={batchesColumns()}
        onRow={(record) => {
          return {
            onClick: () => _onSelectBatch(record),
          };
        }}
        loading={isLoading}
        rowKey={(records) => records.id}
      />
      <BatchModal show={showModal} batch={batch} onHide={_onHideModal} />
    </div>
  );
};

export default BatchesView;
