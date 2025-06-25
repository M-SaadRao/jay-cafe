import React, { useState, useEffect, memo } from 'react';
import { Button } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addQty, removeCartItem } from '../store/cart/cartSlice';
import addonIcon from '../assets/images/addons.webp';

const ItemDetail = ({ label, value }) => (
    <div>
        <p className='text-sm font-medium mt-1 text-gray-500'>{label}</p>
        <p className='text-[12px] mt-0 text-gray-500'>{value}</p>
    </div>
);

const CartItem = ({ item, forComponent }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const dispatch = useDispatch();

    useEffect(() => {
        setQuantity(item.quantity);
    }, [item.quantity]);

    const handleQuantityChange = (delta) => {
        const newQuantity = Math.max(1, quantity + delta);
        setQuantity(newQuantity);
        dispatch(addQty({ id: item.cartItemId, quantity: newQuantity }));
    };

    const removeItem = () => {
        dispatch(removeCartItem(item.cartItemId));
    };

    // Improved method to identify addon items
    const isAddon = () => {
        // Check if this is a standalone addon item (not part of a main product)
        if (item.isStandaloneAddon) return true;
        
        // Check for addon-specific properties
        if (item.a_id || item.t_id || item.addonType) return true;
        
        // Check if the product name suggests it's an addon
        if (item.productName && (
            item.productName.toLowerCase().includes('addon') || 
            item.productName.toLowerCase().includes('extra') ||
            item.productName.toLowerCase().includes('topping')
        )) return true;
        
        return false;
    };

    return (
        <div className='my-2 p-1 bg-white border border-gray-200 shadow-sm rounded-xl relative'>
            <div className="flex gap-3 p-2">
                <div className='w-[80px] min-w-[80px]'>
                    {/* Show addon icon for addon items */}
                    <img 
                        src={isAddon() ? addonIcon : (item.productImage || '')} 
                        alt={item.productName || "Cart item"} 
                        className={`w-full rounded-lg ${isAddon() ? 'bg-gray-100 p-2 object-contain h-[80px]' : ''}`}
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = addonIcon;
                            e.target.className = 'w-full rounded-lg bg-gray-100 p-2 object-contain h-[80px]';
                        }}
                    />
                </div>
                <div className="flex flex-col justify-between w-full">
                    <p className="font-semibold text-[16px]">{item.productName}</p>
                    
                    {/* Variation details */}
                    {item.selectedVariation && <ItemDetail label="Variation" value={item.selectedVariation.v_name} />}
                    {item.selectedCombo && <ItemDetail label="Combo" value={item.selectedCombo.c_name} />}
                    {item.selectedFlavour && <ItemDetail label="Flavour" value={item.selectedFlavour.name} />}
                    {item.selectedDrink && <ItemDetail label="Drink" value={item.selectedDrink.name} />}
                    {item.selectedTopping && <ItemDetail label="Topping" value={item.selectedTopping.t_name} />}
                    
                    {/* Addons list */}
                    {item.selectedAddons && item.selectedAddons.length > 0 && (
                        <div>
                            <p className='text-sm font-medium mt-2 text-gray-500'>Addons</p>
                            {item.selectedAddons.map((addon) => (
                                <p key={addon.a_id} className='text-[12px] mt-1 text-gray-500'>{addon.a_name}</p>
                            ))}
                        </div>
                    )}
                    
                    {/* Quantity controls */}
                    {forComponent === "cart" ? (
                        <div className="flex items-center mt-2">
                            <Button
                                shape="circle"
                                icon={<MinusOutlined />}
                                onClick={() => handleQuantityChange(-1)}
                                size='small'
                                disabled={quantity <= 1}
                            />
                            <p className="mx-2 text-lg min-w-[20px] text-center">{quantity}</p>
                            <Button
                                shape="circle"
                                icon={<PlusOutlined />}
                                onClick={() => handleQuantityChange(1)}
                                size='small'
                            />
                        </div>
                    ) : (
                        <div className="mt-2">
                            <p className="mx-2 text-sm p-0 ml-0">Qty: {quantity}</p>
                        </div>
                    )}
                    
                    {/* Price and delete button */}
                    <div className={`flex ${forComponent === "cart" ? "justify-between" : "justify-end"} items-center mt-3`}>
                        <p className="text-right font-medium">
                            ${(parseFloat(item.productPrice) * quantity).toFixed(2)}
                        </p>
                        {forComponent === "cart" && (
                            <Button
                                type="text"
                                icon={<DeleteOutlined />}
                                className="text-red-500"
                                onClick={removeItem}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(CartItem);