import bcrypt from 'bcryptjs'
const Users = [{
        name: 'Favour Esangbedo',
        email: 'favouresagbedo11@gmail.com',
        password: bcrypt.hashSync('favour2023', 12),
        isAdmin: true
    },
    {
        name: 'Joshua Alfa',
        email: 'joshuaalfa@gmail.com',
        password: bcrypt.hashSync('Joshua2023', 12),
        isAdmin: true
    },
    {
        name: 'Stephen Kweh Dingba',
        email: 'stephendingba@outlook.com',
        password: bcrypt.hashSync('Stephen2023 ', 12),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'JohnDoe2@gmail.com',
        password: bcrypt.hashSync('doe2020', 12),
        isAdmin: false
    }

]
export default Users