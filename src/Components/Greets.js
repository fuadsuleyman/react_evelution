import Greet from './Greet';
import Card from './Card';
import './Greets.css';


const Greets = (props) => {

    return (
        <Card className="expenses">
            <Greet  title={props.myData[0].title}
                    price={props.myData[0].price}
                    date={props.myData[0].date} />
            <Greet  title={props.myData[1].title}
                    price={props.myData[1].price}
                    date={props.myData[1].date} />
            <Greet  title={props.myData[2].title}
                    price={props.myData[2].price}
                    date={props.myData[2].date} />
        </Card>
    )
}

export default Greets;