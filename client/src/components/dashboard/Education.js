import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation, deleteExperience } from '../../actions/profile';


const Education = ({ education, deleteEducation }) => {
    const educations = education.map(education => (
        <tr key={education._id}>
            <td>{education.school}</td>
            <td className='hide-sm'>{education.degree}</td>
            <td>
                <Moment format='YYYY/MM/DD'>{education.from}</Moment> - {
                    education.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{education.to}</Moment>)
                }
            </td>
            <td>
                <button onClick={() => deleteEducation(education._id)} className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    ))

    return (
        <Fragment>
            <h2 className="my-2">Education Credentials</h2>
            <table className='table'>
                <thread>
                    <tr>
                        <th>School</th>
                        <th className="hide-sm">Degree</th>
                        <th className="hide-sm">Years</th>
                        <th />
                    </tr>
                    <tbody>{educations}</tbody>
                </thread>
            </table>
        </Fragment>
    )
}

Education.propTypes = {
    education: PropTypes.array.isRequired,
    deleteEducation: PropTypes.func.isRequired,
}

export default connect(null, { deleteEducation })(Education);
