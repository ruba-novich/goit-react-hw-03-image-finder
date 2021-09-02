import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

function Loaders() {
  return (
    <Loader
      className={styles.Loader}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
}
export default Loaders;
