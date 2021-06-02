import { useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../../Search';
import ImageList from '../../imageList/ImageList';
import Spinner from '../../../components/spinner/Spinner';
import { getAllImagesThunk, getImagesFromSearch } from '../../../store/action';


const Home = (props) => {


    const {
        image,
        isOpenSpinner,
    } = props;

    useEffect(() => {
        props.getImages();

    }, [])

    return (
        <div>

            <div style={
                {
                    padding: '16px',
                    textAlign: 'center'
                }
            } >
                <Search
                    onSub={props.searchImages}
                />
            </div >

            <div>
                <ImageList images={
                    image
                } />
            </div>

            {
                isOpenSpinner && < Spinner />
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        image: state.globalState.image,
        isOpenSpinner: state.globalState.isOpenSpinner
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getImages: () => {
            dispatch(getAllImagesThunk())
        },
        searchImages: (category) => {
            dispatch(getImagesFromSearch(category))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)