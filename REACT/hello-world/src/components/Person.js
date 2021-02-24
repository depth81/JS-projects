import React from 'react'

function Person({person}) {
    return (
        <div>
            <h2>
                I am {person.name}, aged {person.age} and I master {person.skill}
            </h2>
        </div>
    )
}

export default Person
