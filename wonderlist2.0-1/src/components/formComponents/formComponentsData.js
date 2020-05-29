// GUID Generator (uppercase: checked) (hyphens: checked)
// https://www.guidgenerator.com/online-guid-generator.aspx

//Michael- This is all the attribute data that is being fed into the MyForm / MyInput components

export const signUpFormData = (historyRef, passwordRef) => ({
  username: {
    id: '20AA6483-C7D8-4156-96C5-88CADB099E2C',
    type: 'text',
    regData: {
      required: 'Username is a required field.',
      pattern: {
        value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{1,29}$/i,
        message: 'Username must contain 2-30 characters.',
      },
    },
  },

  password: {
    id: '7DBC9083-9C5A-431B-8C21-336AB394DCDC',
    type: 'password',
    regData: {
      required: 'Password is a required field.',
      pattern: {
        value: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/i,
        message: 'This password is too weak. 😢',
      },
    },
  },

  // confirmPassword:{

  //     id:'921B3E5C-65B2-451A-AA24-B8323FFF9785',
  //     type: 'password',
  //     regData: {

  //         required: "Please confirm your password.",
  //         validate: value =>
  //         // Michael- password reference here
  //         value === passwordRef.current || "Your passwords don't match. 😵"
  //     },
  // },

  // fullName:{

  //     id:'218379B1-B567-40C7-A0E1-F3D871F2F36B',
  //     type: 'text',
  //     regData: {

  //         required: "Please enter your full name.",
  //         pattern: {

  //             value: /^(?:([a-zA-Z]{2,4}\.){0,1} ?([a-zA-Z]{2,24})) ([a-zA-Z]{1,1}\. ){0,1}([a-zA-Z]{2,24} ){0,2}([A-Za-z']{2,24})((?:, ([a-zA-Z]{2,5}\.?)){0,4}?)$/i,
  //             message: "Please enter your full name. 🙏",
  //         }
  //     }
  // },

  // email:{

  //     id:'B6502927-C337-43B2-944B-7BFDA950B0D5',
  //     type: 'email',
  //     regData: {

  //         required: "Email is a required field.",
  //         pattern: {

  //             value: /^([\w.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/i,
  //             message: "Please enter a valid email address. 🙏",
  //         }
  //     }
  // },

  buttons: {
    submit: {
      id: '9B6D30CB-7C21-4177-9CE0-EFB788EC595F',
      textContent: 'Submit',
      attributes: {
        type: 'submit',
        variant: 'outlined',
        color: 'primary',
        // onClick: () => historyRef.push('/')
      },
    },

    back: {
      id: '7311C64C-AB48-4EDD-B0F6-55DED8AC65E4',
      textContent: 'Back',
      attributes: {
        type: 'button',
        variant: 'outlined',
        onClick: () => historyRef.goBack(),
      },
    },
  },
});

export const loginFormData = historyRef => ({
  username: {
    id: 'BAD3DE6D-81CB-4CDC-AC1F-9488BF2C5CFA',
    type: 'text',
    regData: {
      required: 'Username is a required field.',
      pattern: {
        value: /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{1,29}$/i,
        message: 'Must contain 2-30 characters.',
      },
    },
  },

  password: {
    id: 'ED19ED33-4856-4718-8A9D-7F45942C8D0B',
    type: 'password',
    regData: {
      required: 'Password is a required field.',
      pattern: {
        value: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/i,
        message: "This isn't a valid passwod 😢",
      },
    },
  },

  buttons: {
    login: {
      id: '0F966445-DC14-478A-B2A7-EE8981AF01EF',
      textContent: 'Login',
      attributes: {
        type: 'submit',
        variant: 'outlined',
        color: 'primary',
        id: 'loginButton'
        // onClick: () => historyRef.push('/profile'),
      },
    },

    goBack: {
      id: '828ACC52-EEC2-4093-8267-877285CEB627',
      textContent: 'Back',
      attributes: {
        type: 'button',
        variant: 'outlined',
        onClick: () => historyRef.goBack(),
      },
    },
  },
});

//converts camelCase to Title Case
export const camelToTitle = str => {
  str = str.replace(/([A-Z])/g, ' $1');
  return str.charAt(0).toUpperCase() + str.slice(1);
};

//temporary styling
export const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '500px',
};
