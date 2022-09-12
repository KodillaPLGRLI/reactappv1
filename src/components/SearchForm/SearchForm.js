import styles from './SearchForm.module.scss'
import TextInput from '../TextInput/TextInput';
import ButtonComp from '../ButtonComp/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <TextInput placeholder="Add new column" />
            <ButtonComp buttonText="Search" />
        </form>
    );
  };
export default SearchForm;