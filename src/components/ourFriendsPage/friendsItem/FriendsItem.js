import {
    FriendName,
    FriendItem,
    DataFriendCont,
    ContImg,
    FriendImg,
    ContData,
    ItemData,
    Button,
    FriendsText,
    TimeList,
    TimeItem,
    Span
} from 'components/ourFriendsPage/friendsItem/FriendsItem.styled'

import { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

export const FiendsItem = ({image, name,email,time,adress,phone}) => {
    const [timeSchedule, setTimeSchedule] = useState(false);
    const nodeRef = useRef(null);

    const handleToggle = () => {
        setTimeSchedule(state => !state)
    };
    return (
        <>
            <FriendItem>
                <FriendName>{name}</FriendName>
                <DataFriendCont>
                    <ContImg>
                        <FriendImg src={image} alt={name}></FriendImg>
                    </ContImg>
                    <ContData>
                        <ul>
                            <ItemData>
                                Time:
                                {!time ? <Button disabled style={{cursor: "inherit"}}>---------------------------------</Button> : <Button onClick={handleToggle}>{time.monday}</Button>}
                                
                            </ItemData>
                            <ItemData>
                                Adress:
                                {!adress ?<FriendsText>---------------------------------</FriendsText> :<FriendsText>{adress}</FriendsText> }
                            </ItemData>
                            <ItemData>
                                Email:
                                <FriendsText>{email}</FriendsText>
                            </ItemData>
                            <ItemData>
                                Phone:
                                <FriendsText>{phone}</FriendsText>
                            </ItemData>
                        </ul>
                    </ContData>
                </DataFriendCont>

                 {time &&
                    <Transition nodeRef={nodeRef} in={timeSchedule} timeout={duration}>
                        {state => (
                    <TimeList ref={nodeRef} style={{...defaultStyle,
                        ...transitionStyles[state]}}>
                        <TimeItem>MN<Span>{time.monday}</Span></TimeItem>
                        <TimeItem>TU<Span>{time.tuesday}</Span></TimeItem>
                        <TimeItem>WE<Span>{time.wednesday}</Span></TimeItem>
                        <TimeItem>TH<Span>{time.thursday}</Span></TimeItem>
                        <TimeItem>FR<Span>{time.friday}</Span></TimeItem>
                        <TimeItem>SA<Span>{time.saturday}</Span></TimeItem>
                        <TimeItem>SU<Span>{time.sunday}</Span></TimeItem>
                            </TimeList>
                        )}
                </Transition>
                }           
            
            </FriendItem>
        </>
    )
}