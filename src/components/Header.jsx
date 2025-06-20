import React, { useState } from 'react';
import { Menu, Drawer, Button, Dropdown, Space, message, Modal } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaCircleUser, FaCartShopping, FaCircleArrowRight } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsBasket2Fill } from "react-icons/bs";
import logo from "../assets/images/final-logo.png";
import { useDispatch, useSelector } from 'react-redux';
import Cart from './Cart';
import { setCurrentUser, setUserPickupModal } from '../store/user/userSlice';
import { setCart, setCartPrice } from '../store/cart/cartSlice';
import { FaTruck } from 'react-icons/fa';

const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);
  const [visibleCart, setVisibleCart] = useState(false);
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const showMenuDrawer = () => setVisibleMenu(true);
  const onCloseMenu = () => setVisibleMenu(false);

  const showCartDrawer = () => setVisibleCart(true);
  const onCloseCart = () => setVisibleCart(false);

  const showLogoutModal = () => setIsLogoutModalVisible(true);
  const handleCancelLogout = () => setIsLogoutModalVisible(false);

  const currentUser = useSelector(state => state.user.currentUser);
  const cartItems = useSelector(state => state.cart.cartItems);
  const cartTotalPrice = useSelector(state => state.cart.cartTotalPrice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleConfirmLogout = () => {
    dispatch(setCurrentUser(null));
    dispatch(setCart([]));
    dispatch(setCartPrice(null));
    message.success("Logout Successfully");
    navigate("/");
    setIsLogoutModalVisible(false);
  };

  let items = [];

  if (currentUser) {
    items = [
      {
        key: '2',
        label: (
          <NavLink to="/myorders" className="flex items-center gap-2 text-[14px]">
            <BsBasket2Fill />
            <span>My Order</span>
          </NavLink>
        ),
      },
      {
        key: '5',
        label: (
          <div onClick={showLogoutModal} className="flex items-center gap-2 text-[14px]">
            <RiLogoutCircleLine />
            <span>Logout</span>
          </div>
        ),
      },
    ];
  } else {
    items = [
      {
        key: '1',
        label: (
          <NavLink to="/login" className="flex items-center gap-2 text-[14px]">
            <FaCircleUser />
            <span>Login</span>
          </NavLink>
        ),
      },
    ];
  }

  const menuItems = [
    { key: '', label: 'Our Menu' },
    { key: 'blue-plate-special', label: 'Blue Plate Special' },
    // { key: 'catering', label: 'Catering' },
    // { key: 'party-tray', label: 'Party Tray' },
    { key: 'gift-cards', label: 'Gift Cards' },
    { key: 'partytray', label: 'Party Tray' },
  ];

  return (
    <>
      <header className="bg-white sticky top-0 z-[1000] border-t-4 p-3 sm:p-0 border-secondary">
        <div className="container mx-auto flex justify-between items-center md:px-2">
          <div className='flex gap-6 items-center'>
            <NavLink to="/" className='cursor-pointer'>
              <img src={logo} alt="Jay Cafe" className='w-[50px] md:w-[70px]' />
            </NavLink>
            <Button
              type='primary'
              // size='large'
              className='font-medium'
              onClick={() => dispatch(setUserPickupModal(true))}
            >
              <FaTruck className='text-lg' />
              <span>Try Our Online Ordering</span>
            </Button>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <div className='mr-3 flex gap-4 items-center'>
              {menuItems.map((item) => (
                <NavLink
                  key={item.key}
                  to={`/${item.key}`}
                  className={({ isActive }) =>
                    `text-[17px] p-3 py-7 leading-none ${isActive ? 'text-white bg-secondary shadow-md' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <Dropdown menu={{ items }} trigger={['click']}>
              <div onClick={(e) => e.preventDefault()} className='flex items-center gap-3 mr-4'>
                <Space>
                  <FaCircleUser className='text-[30px] cursor-pointer' />
                </Space>
                {currentUser && <p className='text-[16px] font-medium cursor-pointer'>{currentUser.fname}</p>}
              </div>
            </Dropdown>
            <div className="relative">
              <FaCartShopping className='text-[30px] cursor-pointer' onClick={showCartDrawer} />
              <span className="absolute top-[-15px] right-[-10px] bg-primary font-medium text-white border-primary border-2 rounded-full text-sm w-5 h-5 flex items-center justify-center">
                {cartItems && cartItems.length}
              </span>
            </div>
          </div>

          <Button
            className="lg:hidden"
            type="primary"
            icon={<MenuOutlined />}
            onClick={showMenuDrawer}
          />
        </div>

        <Drawer title="Menu" placement="right" onClose={onCloseMenu} width={250} open={visibleMenu}>
          {currentUser && (
            <div className='flex justify-center items-center gap-3 my-4'>
              <Space>
                <FaCircleUser className='text-[20px] cursor-pointer' />
              </Space>
              <p className='text-[14px] font-medium cursor-pointer'>{currentUser.fname}</p>
            </div>
          )}
          <Menu mode="vertical" items={items} className="space-y-3 items-center" />
          <hr className="mt-4 h-[1px] bg-gray-400" />
          <div className="mt-4 space-y-3 px-2">
            {menuItems.map((item) => (
              <NavLink onClick={onCloseMenu} key={item.key} to={`/${item.key}`} className={({ isActive }) =>
                `block p-3 rounded-lg text-[14px] font-medium ${isActive ? 'text-white bg-secondary' : ''}`
              }>
                {item.label}
              </NavLink>
            ))}
          </div>
        </Drawer>

        <div className='cart-drawer'>
          <Cart onCloseCart={onCloseCart} visibleCart={visibleCart} />
        </div>

        {cartItems.length > 0 && (
          <div className='lg:hidden flex justify-between items-center gap-3 px-5 py-2 bg-primary w-full text-white text-center fixed bottom-0 left-0 mt-4'>
            <div>
              <p className='text-[10px] m-0 p-0 leading-none'>item {cartItems.length}</p>
              <p className='text-[13px] font-medium mt-1 p-0 leading-none'>${cartTotalPrice}</p>
            </div>
            <div onClick={showCartDrawer} className="flex gap-2 items-center cursor-pointer">
              <p className='font-medium leading-none p-0 m-0'>View Cart</p>
              <FaCircleArrowRight />
            </div>
          </div>
        )}

        <Modal
          title="Logout Confirmation"
          open={isLogoutModalVisible}
          onOk={handleConfirmLogout}
          onCancel={handleCancelLogout}
          okText="Yes"
          cancelText="No"
        >
          <p className='font-medium'>Are you sure you want to logout?</p>
        </Modal>
      </header>
      <div className='p-2 bg-gray-200 font-medium text-center text-sm sm:text-lg'>
        American Restaurant | Authentic Home Cookin’
      </div>
    </>
  );
};

export default Header;