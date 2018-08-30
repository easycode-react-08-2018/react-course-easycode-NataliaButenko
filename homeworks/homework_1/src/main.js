import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const mountNode = document.getElementById('app');

const users = [
  {
    id: 1,
    fullName: 'Иванов Иван',
    avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/57.jpg',
    birthdate: '1976-10-10',
    gender: 'мужской',
    address: 'ул. Звенигороская, 47б',
    email: 'ivanov@mail.ru'
  },
  {
    id: 2,
    fullName: 'Петров Петр',
    avatarUrl: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
    birthdate: '1957-01-14',
    gender: 'мужской',
    address: 'ул.Пушкиская, 13',
    email: 'ivanov@mail.ru'
  },
  {
    id: 3,
    fullName: 'Натальина Наталья',
    avatarUrl: 'https://randomuser.me/api/portraits/thumb/women/7.jpg',
    birthdate: '1990-07-03',
    gender: 'женский',
    address: 'ул. Лермонтова, 59',
    email: 'ivanov@mail.ru'
  }
];


const TableComponents = ({birthdate, gender, address, email}) => {
  return (
    <tbody>
      <tr>
        <td>Дата рождения</td>
        <td>{birthdate}</td>
      </tr>
      <tr>
        <td>Пол</td>
        <td>{gender}</td>
      </tr>
      <tr>
        <td>Адрес</td>
        <td>{address}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>{email}</td>
      </tr>
    </tbody>
  );
};

const ImgComponent = ({avatarUrl}) => {
  return (
    <div className='col-md-3 col-lg-3' align="center">
      <img src={avatarUrl} className="pull-left"/>
    </div>
  );
};

const ComponentPanelBody = props => {
  return (
    <div className="row">
      <ImgComponent {...props} />
      <div className=" col-md-9 col-lg-9">
        <table className="table table-user-information">
          <TableComponents {...props} />
        </table>
      </div>
    </div>
  );
};

const HeadindComponent = ({fullName}) => {
  return (
    <div className="panel-heading">
      <h3 className="panel-title">{fullName}</h3>
    </div>
  );
};

const ComponentPanelInfo = ({users}) => {
  return users.map(user => {
    return (
      <div className="panel panel-info" key={user.id}>
        <HeadindComponent {...user} />
        <div className="panel-body">
          <ComponentPanelBody{...user} />
        </div>
      </div>
    );
  });
};

ReactDOM.render(<ComponentPanelInfo users={users}/>, mountNode);
