import styled from '@emotion/styled';

export const Title = styled.form`
background-color: rgb(2, 48, 85);
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 4px;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  color: #fff;

  &:last-child {
  margin-bottom: 0px;
  }
`;

export const FieldName = styled.Field`
  margin-left: 28px;
`;

export const FieldNumber = styled.Field`
  margin-left: 10px;
`;