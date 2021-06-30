/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import Item from './Item';

const ListWrap = styled.div`
  margin:1vh 2em;
  background-color: #ddd;
  height: 45%;
  overflow-x:hidden;
  overflow-y: auto;
  @media screen and (max-width: 700px) {
    height: 35%;
    
}
`

const List = ({ Listdata, delWork, setCurrentTask}) => {
  return (
    <ListWrap>
      {     
      Listdata.map(item => {
        const { id, note} =item
        return <Item key={ id } id={ id } note ={note} delWork={delWork} setCurrentTask={setCurrentTask}/>
      })}
      
    </ListWrap>
  );
};

export default List;