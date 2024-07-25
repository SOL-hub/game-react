import React from 'react';
import styled from 'styled-components';
import { TextBold16 } from '../common/Typo';
import { Circle, Column, Row } from 'components/common/Layout';
import { BedgeCertification } from 'components/common/Bedge';

const Profile = ({ data }: any) => {
  const { name, profileImage, identified } = data;

  return (
    <Row>
      <ProfileBackground onClick={() => console.log('판매자 계정 페이지로 이동합니다.')}>
        {profileImage && <ProfileImage src={profileImage.url} alt="user 프로필 이미지" />}
      </ProfileBackground>
      <Column justifyContent="space-between" height="56px" padding="3px 0 3px 8px">
        <TextBold16>{name}</TextBold16>
        <BedgeCertification identified={identified} />
      </Column>
    </Row>
  );
};

export default Profile;

const ProfileImage = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileBackground = styled(Circle)`
  width: 3.5rem;
  height: 3.5rem;
  background: ${(props) => props.theme.color.blackSalon200};
`;
