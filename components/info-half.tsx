import Image from 'next/image'
import styles from './info-half.module.scss';
import { headerItalic } from '../pages/_app';

const textContent = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris. Tristique nulla aliquet enim tortor at auctor urna nunc id. In tellus integer feugiat scelerisque varius. At tempor commodo ullamcorper a. Amet aliquam id diam maecenas. Ut diam quam nulla porttitor massa id neque. Platea dictumst quisque sagittis purus sit. Viverra orci sagittis eu volutpat. Cras fermentum odio eu feugiat pretium nibh ipsum. Id donec ultrices tincidunt arcu. Tortor posuere ac ut consequat semper. Eu mi bibendum neque egestas congue quisque egestas. Id cursus metus aliquam eleifend. Cursus turpis massa tincidunt dui ut ornare lectus sit. Sit amet tellus cras adipiscing enim eu turpis. Volutpat sed cras ornare arcu dui.
`;

const InfoHalf = () => (
    <section className={`container-fluid ${styles.main}`}>
        <div className='row'>
            <div className={`col-lg ${styles.imageContainer}`}>
                <Image className={styles.image} src="/images/photos/pexels-luizclas-1848565.jpg" alt="Info image" fill={true} />
            </div>
            <div className={`col-lg ${styles.textBox}`}>
                <h2 className={headerItalic}>Lorem ipsum</h2>
                <br />
                <p>{textContent}</p>
            </div>
        </div>
    </section>
);

export default InfoHalf;