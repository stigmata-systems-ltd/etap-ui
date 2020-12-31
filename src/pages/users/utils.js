import React from 'react';
import IconButton from '../../common/forms/IconButton';


export const listUsersMetaData = (handleDelete, handleEdit) => {
    return [
      {
        name: 'User ID',
        selector: 'userID',
        sortable: false,
      },
      {
        name: 'First Name',
        selector: 'firstName',
        sortable: false,
      },
      {
        name: 'Last Name',
        selector: 'lastName',
        sortable: false,
      },
      {
        name: 'User Name',
        selector: 'userName',
        sortable: false,
      },
      {
        name: 'Email',
        selector: 'email',
        sortable: false,
      },
      {
        name: 'Mobile No',
        selector: 'mobileNo',
        sortable: false,
      },
      {
        name: 'Actions',
        sortable: false,
        cell: row => {
          return (
            <>
              {(
                <IconButton
                  iconName="faEdit"
                  onClick={() => handleEdit(row.id)}
                />
              )}
            </>
          );
        },
      },
    ];
  };

  export const transformUsersList = usersList => {
    let tmpArr = [];
    usersList &&
    usersList.map(user => {
        
        let tmpObj = {
          id: user.userId,
          userID: user.userId,
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          email: user.email,
          mobileNo: user.mobileNo,
        };
        tmpArr.push(tmpObj);
      });
    return tmpArr;
  };




