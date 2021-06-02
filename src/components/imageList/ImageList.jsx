import styles from './imageList.module.css';
import notFound from '../../components/assets/images/404.jpg';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    const imgs = props.images.map((img) => {

        return (
            <div key={img.id} >

                <ImageCard image={img} />
            </div>

        )
    })
    return (
        <div className={styles.image_list} id="gallery">

            {imgs.length ? imgs :
                <div
                    style={{
                        width: '1325px',
                        height: '250px',
                        textAlign: 'center'
                    }}
                >
                    <img
                        src={notFound}
                        alt="notFound"
                    />
                </div>}

        </div>
    )
}



export default ImageList