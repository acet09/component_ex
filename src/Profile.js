import React from 'react';

const Profile = (props) => {
  // 우선 구조분해 할당을 사용하여 const로 처리
  const { name, age, love } = props.data
  return (
    <dl>
      <dt>Name</dt><dd>{name}</dd>
      <dt>Age</dt><dd>{age}</dd>
      <dt>Love</dt><dd>{love}</dd>
    </dl>
  )
}

export default Profile