import page_under_construct_gif from './page_under_construction.gif';
import './App.css';
import {Result, Image, Row} from "antd";

function App() {
  return (
      <Row justify={'center'} style={{ backgroundColor: '#fafafb', height: '100vh' }}>
          <Result
              title="Under maintenance!"
              icon={<Image height={'50vh'} src={page_under_construct_gif} preview={false} />}
              subTitle="Site under maintenance, will be back  very soon!"
          />
      </Row>

  );
}

export default App;
