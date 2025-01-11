import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './styles.css'; 
import logo from './assets/logo.png';

const Navbar = () => {
    return (
        <div style={navbarStyles.container}>
            <img 
                src={logo} 
                alt="Logo" 
                style={navbarStyles.logo} 
            />
            <h2 style={navbarStyles.title}>Item List Manager</h2>
        </div>
    );
};

const ItemListManager = () => {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const addItem = () => {
        if (inputValue) {
            setItems([...items, inputValue]);
            setInputValue(""); 
        }
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div>
            <Navbar />
            <div style={styles.container}>
                <h1 style={styles.title}>Item List</h1>
                <div style={styles.inputContainer}>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder='Enter an item'
                        style={styles.input}
                    />
                    <button 
                        onClick={addItem} 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        style={isHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}>
                        Add Item
                    </button>
                </div>
                <ul style={styles.list}>
                    <TransitionGroup>
                        {items.map((item, index) => (
                            <CSSTransition key={index} timeout={500} classNames="fade">
                                <li style={styles.item}>{item}</li>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '400px',
        margin: 'auto',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        color: '#333'
    },
    inputContainer: {
        justifyContent: 'space-between', 
        alignItems: 'center',          
        marginBottom: '15px',
    },
    input: {
        padding: '10px',
        width: '90%',      
        alignItems: 'center',           
        marginRight: '10px',          
        border: '1px solid #ddd',
        borderRadius: '3px',
        outline: 'none'
    },
    button: {
        padding: '10px 15px',
        width: '95%',               
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '3px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    buttonHover: {
        backgroundColor: '#218838',    
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        margin: 0
    },
    item: {
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '3px',
        margin: '5px 0',
        backgroundColor: '#fff',
        width:'90%'
    }
};

const navbarStyles = {
    container: {
      backgroundColor: 'rgba(3, 33, 48)',
        padding: '10px',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'green',
        margin: 0,
        marginLeft: '10px'
    },
    logo: {
        height: '40px',
        width: '40px',
    }
};

export default ItemListManager;
