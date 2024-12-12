import React, { FC } from 'react';
// import { useParams } from 'react-router-dom';
// import { getQuestionService } from '../../../services/question';
import useLoadQuestionData from '../../../hooks/useLoadQuestionData';

const Edit: FC = () => {
  // const { id = '' } = useParams();
  // const [loading, setLoading] = useState(false);
  // const [questionData, setQuestionData] = useState({});

  // useEffect(() => {
  //   async function fn() {
  //     const data = await getQuestionService(id);
  //     setQuestionData(data);
  //     setLoading(false);
  //   }
  //   fn();
  // }, []);
  const { loading, data } = useLoadQuestionData();
  return (
    <div>
      <p>Edit page</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

export default Edit;
