import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserById, clearDetail } from '../../store/user-slice';
import ModalDialog from '../ui-element/ModalDialog';

export default function ContactDialog() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { detail: user, detailStatus } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUserById(id));
        return () => dispatch(clearDetail());
    }, [id, dispatch]);

    const handleClose = () => navigate('/user');

    const fullName = user
        ? `${user.name ?? ''}`
        : '…';

    return (
        <ModalDialog>
            {/* Header */}
            <div className="dialog-header">
                <h2>{detailStatus === 'loading' ? 'Loading…' : fullName}</h2>
                <button type="button" onClick={handleClose}>✕</button>
            </div>

            {/* Body */}
            {detailStatus === 'succeeded' && user && (
                <table>
                    <tbody>    
                        <tr>
                            <td>📞 Phone</td>
                            <td>{user.phone}</td>
                        </tr>
                        <tr>
                            <td>✉ Email</td>
                            <td>{user.email}</td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <td colSpan={2}>
                                <fieldset>
                                    <legend>Address</legend>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>City</td>
                                                <td>{user.address?.city}</td>
                                            </tr>
                                            <tr>
                                                <td>Street</td>
                                                <td>{user.address?.street}</td>
                                            </tr>
                                            <tr>
                                                <td>Zipcode</td>
                                                <td>{user.address?.zipcode}</td>
                                            </tr>
                                            <tr>
                                                <td>Geolocation</td>
                                                <td>
                                                    {user.address?.geo?.lat},{' '}
                                                    {user.address?.geo?.lng}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </fieldset>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </ModalDialog>
    );
}