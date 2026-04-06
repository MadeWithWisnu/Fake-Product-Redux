import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getContactAPI, getNameAPI } from '../../services/user-service';
import ModalDialog from '../ui-element/ModalDialog';

export default function ContactDialog() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: nameData, isLoading: nameLoading } = useQuery({
        queryKey: ['user-name', id],
        queryFn: () => getNameAPI(id),
        staleTime: 60000
    });

    const { data: contact, isLoading: contactLoading } = useQuery({
        queryKey: ['user-contact', id],
        queryFn: () => getContactAPI(id),
        staleTime: 60000
    });

    const handleClose = () => navigate('/user');

    const fullName = nameData 
    ? `${nameData.name?.firstname ?? ''} ${nameData.name?.lastname ?? ''}` 
    : '…';

    return (
        <ModalDialog>
            {/* Header */}
            <div className="dialog-header">
                <h2>{nameLoading ? 'Loading…' : fullName}</h2>
                <button type="button" onClick={handleClose}>✕</button>
            </div>

            {/* Body */}
            {!contactLoading && contact && (
                <table>
                    <tbody>
                        <tr>
                            <td>📞 Phone</td>
                            <td>{contact.phone}</td>
                        </tr>
                        <tr>
                            <td>✉ Email</td>
                            <td>{contact.email}</td>
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
                                                <td>{contact.city}</td>
                                            </tr>
                                            <tr>
                                                <td>Street</td>
                                                <td>{contact.street}</td>
                                            </tr>
                                            <tr>
                                                <td>Zipcode</td>
                                                <td>{contact.zipcode}</td>
                                            </tr>
                                            <tr>
                                               <td>Geolocation</td>
                                                <td>
                                                    {contact.lat},{' '}
                                                    {contact.long}
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