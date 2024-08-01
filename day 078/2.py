user = {
    'name': '',
    "password": '',
}

name = input('lease enter your name: ')
password = input('please enter your password: ')

user['name'] = name
user['password'] = password

print('name:', user.get('name', 'no found!'))
print('password:', user.get('password', 'not found!'))