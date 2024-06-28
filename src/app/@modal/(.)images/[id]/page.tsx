import React from "react";
import { getImage } from "~/server/db/queries/images";
import { Modal } from "./modal";
import FullPageImagePreview from "~/components/fullImage";

function PhotoModal({ params: { id } }: { params: { id: string } }) {
  return (
    <Modal>
      <FullPageImagePreview id={id} />
    </Modal>
  );
}

export default PhotoModal;
