import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { useWindowDimensions } from 'react-native';

// 9 : 33~
const Containter = styled.View``;
const Header = styled.View``;
const UserAvatar = styled.Image``;
const Username = styled.Text`
  color: white;
`;
const File = styled.Image``;
const Actions = styled.View``;
const Action = styled.TouchableOpacity``;
const Caption = styled.View``;
const CaptionText = styled.Text`
  color: white;
`;
const Likes = styled.Text`
  color: white;
`;

function Photo({ id, user, caption, file, isLiked, likes }) {
  const { width, height } = useWindowDimensions();
  return (
    <Containter>
      <Header>
        <UserAvatar />
        <Username>{user.username}</Username>
      </Header>
      <File style={{ width, height: height - 500 }} source={{ uri: file }} />
      <Actions>
        <Action />
        <Action />
      </Actions>
      <Likes>{likes === 1 ? '1 like' : `${likes} likes`}</Likes>
      <Caption>
        <Username>{user.username}</Username>
        <CaptionText>{caption}</CaptionText>
      </Caption>
    </Containter>
  );
}

Photo.prototype = {
  id: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string.isRequired,
  }),
  caption: PropTypes.string,
  file: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  commentNumber: PropTypes.number.isRequired,
};

export default Photo;
