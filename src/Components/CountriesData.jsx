import React, { useEffect, useState } from 'react'

const CountriesData = () => {
    const [countries, setCountries] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);


    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        countries.map(country => (
                            <div className="col-sm-12 col-md-6 col-lg-4">

                                <div className="card my-3" >
                                    <img src={country.flags.png} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"><span className='text-info'>Country Name: </span>{country.name.common}</h5>
                                        <h6 className="card-title"><span className='text-info'>Capital: </span>{country.capital}</h6>
                                        <h6 className="card-title"><span className='text-info'>Region: </span>{country.region}</h6>
                                        <h6 className="card-title"><span className='text-info'>Population: </span>{country.population}</h6>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default CountriesData
