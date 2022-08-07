import AsyncStorage from '@react-native-async-storage/async-storage'

interface AuthStorageProps {
    user: User
    token: Token
}

export async function getAuthStorage():Promise<AuthStorageProps|undefined> {
    const response = await AsyncStorage.multiGet([
        '@MyFinances:user',
        '@MyFinances:token'
    ])

    if (!response[0][1] || !response[1][1]){
        return undefined
    }

    const user = JSON.parse(String(response[0][1]))

    const token = JSON.parse(String(response[1][1]))

    return {
        user,
        token
    }
}

export async function setAuthStorage({ user, token } :AuthStorageProps):Promise<void> {
    await AsyncStorage.multiSet([
        ['@MyFinances:user', JSON.stringify(user)],
        ['@MyFinances:token', JSON.stringify(token)] 
    ])
}