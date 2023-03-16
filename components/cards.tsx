import { Container, Row, Col } from "react-bootstrap";
import styles from './cards.module.scss';

type CardProps = {
    label: string,
    text: string,
}

const cardInfo = [
    {
        label: 'Lorem ipsum dolor',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        label: 'Lorem ipsum dolor',
        text: 'Ipsum a arcu cursus vitae congue mauris.'
    },
    {
        label: 'Lorem ipsum dolor',
        text: 'Tristique nulla aliquet enim tortor at auctor urna nunc id.'
    },
]

const Card = ({ label, text }: CardProps) => (
    <Col lg={4} className={styles.column}>
        <div className={styles.card}>
            <h6 className='subheader'>{label}</h6>
            <p>{text}</p>
        </div>
    </Col>
)

const Cards = () => (
    <Container className={styles.parent}>
        <Row>
            {
                cardInfo.map((card, idx) => <Card key={idx} label={card.label} text={card.text} />)
            }
        </Row>
    </Container>
);

export default Cards;