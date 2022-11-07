import styles from './about.module.scss';

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
    <div className={`col-lg`}>
        <h5 className='subheader'>{label}</h5>
        <p>{text}</p>
    </div>
)

const Cards = () => (
    <section className={`container-md ${styles.parent}`}>
        <div className='row'>
            {
                cardInfo.map((card, idx) => <Card key={idx} label={card.label} text={card.text} />)
            }
        </div>
    </section>
);

export default Cards;