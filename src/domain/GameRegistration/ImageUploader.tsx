import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/atom/Layout';
import { Icon, ICON_TYPE } from 'components/atom/Icon';
import { PageControlBadge } from 'components/template/PageNavigation';

const UPLOADE_LIMIT = 10;

const ImageUploader = () => {
  /** 로직 분리 전 */
  const [imageFileList, setImageFileList] = useState([]);
  const [imagePreviewList, setImagePreviewList] = useState<string[]>([]);

  const doImageUpload = (e) => {
    if (e.target.files[0] === undefined) return;
    if (typeof FileReader === undefined)
      return alert(
        '파일 업로드를 지원하지 않는 브라우저입니다. 크롬, 사파리, 엣지로 재접속 후 이용부탁드립니다.',
      );

    const files = [...e.target.files];
    const uploadeLength =
      imageFileList.length + files.length > UPLOADE_LIMIT
        ? files.length - (imageFileList.length + files.length - UPLOADE_LIMIT)
        : files.length;

    for (let i = 0; i < uploadeLength; i++) {
      const file = files[i];

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageFileList((imageFileList) => imageFileList.concat(file));
        setImagePreviewList((imagePreviewList) => imagePreviewList.concat(reader.result as string));
      };
      reader.onerror = (error: any) => {
        alert(`파일 읽기에 실패했습니다. 다시 시도해주세요.\nerror code : ${error.code}`);
      };
    }
  };

  const doImageDelete = (imgSrc: string) => {
    setImageFileList(imageFileList.filter((item) => item !== imgSrc));
    setImagePreviewList(imagePreviewList.filter((item) => item !== imgSrc));
  };

  return (
    <UploaderBox>
      <input
        id="imageUploader"
        type="file"
        accept="image/jpg,image/png,image/jpeg"
        multiple={true}
        value=""
        onChange={(e) => doImageUpload(e)}
        style={{ display: 'none' }}
      />
      <label htmlFor="imageUploader">
        <UploaderButton column>
          <Icon iconName={ICON_TYPE.camera} color="red200" />
          <PageControlBadge current={imageFileList.length} total={UPLOADE_LIMIT} />
        </UploaderButton>
      </label>
      {imagePreviewList.map((item, idx) => (
        <ImageBox key={idx}>
          <ImageDelete>
            <Icon
              iconName={ICON_TYPE.closeCircle}
              color="red500"
              onClick={() => doImageDelete(item)}
            />
          </ImageDelete>
          <Image src={item} />
        </ImageBox>
      ))}
    </UploaderBox>
  );
};

export default ImageUploader;

const UploaderBox = styled(Flex)`
  flex-wrap: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
`;

const UploaderButton = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  width: 6.438rem;
  height: 6.25rem;
  padding: 1.5rem 0;
  border: 1px solid ${({ theme }) => theme.color.red100};
  border-radius: 0.75rem;
  cursor: pointer;
`;

const ImageBox = styled.div`
  position: relative;
  width: 6.25rem;
  height: 6.25rem;
  margin-left: 0.75rem;
`;

const Image = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  object-fit: cover;
  border-radius: 0.75rem;
`;

const ImageDelete = styled.div`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
`;
