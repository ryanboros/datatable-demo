import React from "react";
import _ from "lodash";
import { Descriptions, Modal, Tag } from "antd";

import { formatTime } from "utils/formatted-time";

const BatchModal = ({ batch, show, onHide }) => {
  /**
   * RENDER
   **/

  return (
    <Modal visible={show} footer={null} onCancel={onHide}>
      <Descriptions title="Batch Details" column={1}>
        <Descriptions.Item label="ID">{batch.id}</Descriptions.Item>
        <Descriptions.Item label="Status">{batch.status}</Descriptions.Item>
        <Descriptions.Item label="Created At">
          {batch.createdAt ? formatTime(batch.createdAt) : <em>N/A</em>}
        </Descriptions.Item>
        <Descriptions.Item label="Created By">
          {batch.createdBy}
        </Descriptions.Item>
        <Descriptions.Item label="Labels">
          {!_.isEmpty(batch.labels) ? (
            <>
              {batch.labels.map((label, i) => {
                return <Tag key={i}>{label}</Tag>;
              })}
            </>
          ) : (
            <em>none</em>
          )}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  );
};

export default BatchModal;
