import React, { memo, useEffect, useState } from "react";
import { Modal, Button, Checkbox, Radio, message } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/cart/cartSlice";

const ProductModal = ({
  open,
  product,
  hideModal,
  isCatProduct,
  isPartyTray,
}) => {
  // Determine extra add-on category
  const catId = String(product.c_id || product.cid);
  const isExtraAddOn = catId === "12";

  const [quantity, setQuantity] = useState(1);
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [selectedFlavour, setSelectedFlavour] = useState(null);
  const [selectedTopping, setSelectedTopping] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [productPrice, setProductPrice] = useState(product.f_price);
  const dispatch = useDispatch();

  const handleQuantityIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onAdonsChange = (addonId, checked) => {
    const addon = product.addons_list.find((a) => a.a_id === addonId);
    const delta = checked ? +addon.a_price : -addon.a_price;
    setSelectedAddons((prev) =>
      checked ? [...prev, addon] : prev.filter((a) => a.a_id !== addonId)
    );
    setProductPrice((prev) => +prev + delta);
  };

  const onComboChange = (e) => {
    const comboId = e.target.value;
    const selectedComboObj = product.combo_list.find(
      (combo) => combo.c_id === comboId
    );
    const previousPrice = selectedVariation
      ? selectedVariation.v_price
      : product.f_price;
    setSelectedCombo(selectedComboObj);
    setProductPrice(
      (prevPrice) => +prevPrice - +previousPrice + +selectedComboObj.c_price
    );
  };

  const onDrinkChange = (e) => {
    const drinkId = e.target.value;
    const selectedDrinkObj = product.drink_list.find(
      (drink) => drink.id === drinkId
    );
    const previousDrinkPrice = selectedDrink ? +selectedDrink.price : 0;
    setSelectedDrink(selectedDrinkObj);
    setProductPrice(
      (prevPrice) => +prevPrice - +previousDrinkPrice + +selectedDrinkObj.price
    );
  };

  const onVariationChange = (e) => {
    const variationId = e.target.value;
    const selectedVariationObj = product.variation_list.find(
      (variation) => variation.v_id === variationId
    );
    const addonPrices = selectedAddons.reduce((total, addon) => {
      return total + +addon.a_price;
    }, 0);
    setSelectedVariation(selectedVariationObj);
    setProductPrice(
      +selectedVariationObj.v_price +
        addonPrices +
        (selectedCombo ? +selectedCombo.c_price : 0) +
        (selectedDrink ? +selectedDrink.price : 0) +
        (selectedTopping ? +selectedTopping.t_price : 0)
    );
  };

  const onFlavourChange = (e) => {
    const selectedFlavourObj = product.flavor_list.find(
      (flavor) => +flavor.id === +e.target.value
    );
    setSelectedFlavour(selectedFlavourObj);
  };

  const onToppingChange = (e) => {
    const toppingId = e.target.value;
    const selectedToppingObj = product.tooping_list.find(
      (topping) => topping.t_id === toppingId
    );
    const previousToppingPrice = selectedTopping ? +selectedTopping.t_price : 0;
    setSelectedTopping(selectedToppingObj);
    setProductPrice(
      (prevPrice) =>
        +prevPrice - +previousToppingPrice + +selectedToppingObj.t_price
    );
  };

  useEffect(() => {
    if (!open) {
      // Reset all selections when modal is closed
      setQuantity(1);
      setSelectedCombo(null);
      setSelectedDrink(null);
      setSelectedVariation(null);
      setSelectedFlavour(null);
      setSelectedTopping(null);
      setSelectedAddons([]);
      setProductPrice(product.f_price);
    }
  }, [open, product.f_price]);

  useEffect(() => {
    // Reset addons selection when modal visibility changes
    if (!open) {
      setSelectedAddons([]);
    }
  }, [open]);

  const addItemToCart = () => {
    if (product.variation === "1" && !selectedVariation) {
      message.error("Please Select Required Fields");
      return;
    }
    const payload = {
      productId: product.f_id,
      cartItemId: Date.now(),
      productPrice,
      productName: product.f_name,
      productImage: product.f_image,
      quantity,
      selectedCombo,
      selectedDrink,
      selectedFlavour,
      selectedTopping,
      selectedAddons,
      selectedVariation,
    };

    dispatch(addCartItem(payload));
    message.success("Item Added To Cart");
    hideModal();
  };

  const modalWidth =
    product.variation === "1" ||
    product.combo === "1" ||
    product.flavor === "1" ||
    product.drink === "1" ||
    product.toopings === "1" ||
    product.addons === "1"
      ? 900
      : 400;

  const CustomCloseIcon = () => (
    <span className="absolute top-[-20px] right-[-20px] mt-4 mr-4 bg-red-500 rounded-full p-2 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span>
  );

  return (
    <Modal
      open={open}
      onCancel={hideModal}
      footer={null}
      width={modalWidth}
      centered
      closeIcon={<CustomCloseIcon />}
    >
      <div
        className={`flex flex-col ${
          modalWidth === 900 ? "md:flex-row" : "md:flex-col"
        }`}
      >
        {/* Left section with background image */}
        {isExtraAddOn ? (
          <div className="w-full p-4 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-black">{product.f_name}</h2>
          </div>
        ) : (
          <div
            className={`w-full relative md:order-1 pb-[60%] ${
              product.variation === "1" ? "md:pb-[40%]" : "md:pb-[60%]"
            } ${modalWidth === 900 ? "md:w-1/2" : "w-full"}`}
            style={{
              backgroundImage: `url(${product.f_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent text-white w-full">
              <h2 className="text-lg font-bold">{product.f_name}</h2>
              <p>{product.f_details}</p>
            </div>
          </div>
        )}
        {/* Right section with quantity */}
        <div className="w-full md:w-1/2 p-4 flex flex-col justify-between md:order-2">
          <div className="mb-3 max-h-[400px] overflow-y-auto scrollbar-thin scrollbar-brown pr-4">
            {product.variation === "1" && product.variation_list.length > 0 && (
              <div className="mb-2 border border-gray-100 rounded-lg p-2 bg-gray-100">
                <h4 className="block font-medium mb-2 text-[16px] border-b border-gray-200">
                  Variation
                  {product.variation === "1" && !selectedVariation ? (
                    <span className="text-red-500 text-[13px]">- Required</span>
                  ) : (
                    <span className="text-green-500 text-[13px]">
                      - Selected
                    </span>
                  )}
                </h4>
                <Radio.Group
                  onChange={onVariationChange}
                  value={selectedVariation ? selectedVariation.v_id : undefined}
                >
                  {product.variation_list.map((variation) => (
                    <Radio key={variation.v_id} value={variation.v_id}>
                      {variation.v_name} - ${variation.v_price}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            )}
            {product.addons === "1" && product.addons_list.length > 0 && (
              <div className="mb-2 border border-gray-100 rounded-lg p-2 bg-gray-100">
                <h4 className="block playFont mb-2 text-[16px] border-b border-gray-200">
                  Addons
                </h4>
                {product.addons_list.map((addon) => (
                  <div
                    key={addon.a_id}
                    className="flex justify-between gap-2 items-center"
                  >
                    <Checkbox
                      onChange={(e) =>
                        onAdonsChange(addon.a_id, e.target.checked)
                      }
                      checked={selectedAddons.some(
                        (a) => a.a_id === addon.a_id
                      )}
                    >
                      {addon.a_name}
                    </Checkbox>
                    <p>${addon.a_price}</p>
                  </div>
                ))}
              </div>
            )}
            {product.combo === "1" && product.combo_list.length > 0 && (
              <div className="mb-2 border border-gray-100 rounded-lg p-2 bg-gray-100">
                <h4 className="block font-medium mb-2 text-[16px] border-b border-gray-200">
                  Combo
                </h4>
                <Radio.Group
                  onChange={onComboChange}
                  value={selectedCombo ? selectedCombo.c_id : undefined}
                >
                  {product.combo_list.map((item) => (
                    <Radio key={item.c_id} value={item.c_id}>
                      {item.c_name} - ${item.c_price}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            )}
            {product.drink === "1" && product.drink_list.length > 0 && (
              <div className="mb-2 border border-gray-100 rounded-lg p-2 bg-gray-100">
                <h4 className="block font-medium mb-2 text-[16px] border-b border-gray-200">
                  Drink
                </h4>
                <Radio.Group
                  onChange={onDrinkChange}
                  value={selectedDrink ? selectedDrink.id : undefined}
                >
                  {product.drink_list.map((drink) => (
                    <Radio key={drink.id} value={drink.id}>
                      {drink.name} - ${drink.price}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            )}
            {product.flavour === "1" && product.flavor_list.length > 0 && (
              <div className="mb-2 border border-gray-100 rounded-lg p-2 bg-gray-100">
                <h4 className="block font-medium mb-2 text-[16px] border-b border-gray-200">
                  Flavours
                </h4>
                <Radio.Group
                  onChange={onFlavourChange}
                  value={selectedFlavour && selectedFlavour.id}
                >
                  {product.flavor_list.map((flavour) => (
                    <Radio key={flavour.id} value={flavour.id}>
                      {flavour.name}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            )}
            {product.toppings === "1" && product.tooping_list.length > 0 && (
              <div className="mb-2 border border-gray-100 rounded-lg p-2 bg-gray-100">
                <h4 className="block font-medium mb-2 text-[16px] border-b border-gray-200">
                  Topping
                </h4>
                <Radio.Group
                  onChange={onToppingChange}
                  value={selectedTopping ? selectedTopping.t_id : undefined}
                >
                  {product.tooping_list.map((topping) => (
                    <Radio key={topping.t_id} value={topping.t_id}>
                      {topping.t_name} - ${topping.t_price}
                    </Radio>
                  ))}
                </Radio.Group>
              </div>
            )}
          </div>
          {!isCatProduct && (
            <div className="flex justify-between gap-3 items-center max-md:flex-col">
              <div className="flex items-center">
                <Button
                  shape="circle"
                  icon={<MinusOutlined />}
                  onClick={handleQuantityDecrease}
                />
                <p className="mx-2 text-lg">{quantity}</p>
                <Button
                  shape="circle"
                  icon={<PlusOutlined />}
                  onClick={handleQuantityIncrease}
                />
              </div>
              <Button type="primary" onClick={addItemToCart}>
                <span>${productPrice}</span>
                <span>Add to Cart</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default memo(ProductModal);
