import React, { useState } from 'react'
import Container from '../components/Container'
import AddressModal from '../components/AddressModal';
import { useSelector } from 'react-redux';
import AddressCard from '../components/AddressCard';
import { Empty } from 'antd';

const MyAddress = () => {

    const addresses = useSelector(state => state.user.userAddresses)

    const [addressModalOpen, setAddressModalOpen] = useState(false);

    const openAddressModal = () => {
        setAddressModalOpen(true);
    }

    const closeAddressModal = () => {
        setAddressModalOpen(false);
    }

    return (
        <Container>
            <div className='bg-white px-4 py-6 rounded-xl border-2 border-gray-200 shadow-sm'>
                <div className="flex justify-between items-center mb-2">
                    <h2 className='text-[17px] text-gray-800'>Your Delivery Addresses</h2>
                    <h2 className='text-[17px] text-primary font-medium cursor-pointer' onClick={openAddressModal}>+ Add New Address</h2>
                </div>
                <div className="py-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {addresses && addresses.length > 0 &&
                        addresses.map((address) => (
                            <AddressCard key={address.address_id} address={address} />
                        ))
                    }
                </div>

                {addresses.length === 0 &&
                    <div className="flex justify-center py-5">
                        <Empty description="No Address Available" />
                    </div>
                }

            </div>
            <AddressModal isModalOpen={addressModalOpen} handleCancel={closeAddressModal} />
        </Container>
    )
}

export default MyAddress