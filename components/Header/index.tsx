import './styles/index.scss';
import { NotificationBing, Gallery } from 'iconsax-react';

type Props = {
    name: string;
    date: string;
}

const Header = (props: Props) => {
    const {name, date} = props;
  return (
    <div className='content'>
        <div className='welcome-msg'>
            <label>{name}</label>
            <label>{date}</label>
        </div>
        <div className='notification-img' >
            <span>
                <NotificationBing size="24" variant='Linear'/>
            </span>
            <span>
                <Gallery size="24" variant='Bold'/>
            </span>
        </div>
    </div>
  )
}

export default Header;