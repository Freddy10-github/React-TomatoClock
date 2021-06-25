/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import Item from './Item';

const ListWrap = styled.div`
  margin:10px 1em;
  background-color: #ddd;
  height: 45%;
  overflow-x:hidden;
  overflow-y: auto;
`

const List = ({ Listdata, delWork}) => {
  return (
    <ListWrap>
      {     
      Listdata.map(item => {
        const { id, note, } =item
        return <Item key={ id } id={ id } note ={note} delWork={delWork}/>
      })}
      
    </ListWrap>
  );
};

export default List;