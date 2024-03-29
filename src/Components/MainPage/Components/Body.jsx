import React from 'react';
import BodyCss from './Styles/Main.module.css';
import Packet from './Packet/Packet';
import { useSelector } from 'react-redux';

const Body = (props) => {
  let UserFolders = useSelector((state) => state.Autoris.list.folders);
  const CurrentUser = useSelector((state) => state.Autoris.list.person);

  if (props.StringSearh !== '') {
    //это нужно чтобы осуществлять поиск по папкам
    UserFolders = UserFolders.filter((el) => !el.name.indexOf(props.StringSearh));
  }

  return (
    <div className={BodyCss.MainPage__Main_base}>
      <div className={BodyCss.MainPage__Main_TextBlock}>Ваши папки</div>
      <div className={BodyCss.MainPage_Main_GeneralBlock}>
        {UserFolders.length === 0
          ? ''
          : UserFolders.map((el) => (
              <Packet
                key={el.id_folder}
                data={{
                  name: el.name,
                  emount: el.amount_card,
                  icon: CurrentUser[0].icon,
                  user_name: el.user_name,
                  id_folder: el.id_folder,
                }}
                height='h-1/3'
              />
            ))}
      </div>
    </div>
  );
};

export default Body;
