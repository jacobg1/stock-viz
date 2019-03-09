export const customStyles = {
  control: (base, state) => ({
    ...base,
    background: '#282c34',
    borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
    boxSizing: 'border-box',
    borderColor: state.isFocused ? '#95eaf1' : 'white',
    boxShadow: state.isFocused ? null : null,
    '&:hover': {
      borderColor: state.isFocused ? 'rgb(239, 110, 141)' : '#a8a8ff'
    }
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: 'all .2s ease',
    color: state.selectProps.menuIsOpen ? '#95eaf1' : 'white',
    '&:hover': {
      color: state.isFocused ? 'rgb(239, 110, 141)' : '#a8a8ff'
    }

    // transform: state.isMenuOpen ? 'rotate(180deg)' : 'rotate(360deg)'
  }),
  menu: base => ({
    ...base,
    borderRadius: 0,
    hyphens: 'auto',
    marginTop: 0,
    textAlign: 'center',
    wordWrap: 'break-word'
  }),
  menuList: base => ({
    ...base,
    padding: 0,
    background: '#282c34'
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted #95eaf1',
    color: state.isSelected ? '#023950' : 'rgb(239, 110, 141)',
    background: state.isSelected ? '#a8a8ff' : '#282c34',
    opacity: state.isSelected ? 0.75 : 1,
    padding: 15,
    '&:hover': {
      color: 'white'
      // background: '#a8a8ff'
    },
    '&:focus': {
      color: 'white'
      // background: '#a8a8ff'
    },
    cursor: 'pointer',
    ':active': {
      backgroundColor: '#a8a8ff'
    }
  })
}
