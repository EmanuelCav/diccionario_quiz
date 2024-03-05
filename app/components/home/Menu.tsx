import { View } from 'react-native'
import { useEffect, useState } from 'react'
import { COLLECTION_QUESTIONS } from '@env'

import { homeStyles } from '../../styles/home.styles'

import ButtonMenu from './components/ButtonMenu'

import { MenuPropsType } from '../../types/props.types'
import { IQuestion } from '../../interface/Game'

import { generateGameAction } from '../../server/actions/game.actions'

import { firestore } from '../../../firebase.config'
import { collection, onSnapshot } from 'firebase/firestore'

const Menu = ({ navigation, categories, amountOptions, amountQuestions, generateGame, changeLoading }: MenuPropsType) => {

    const [questions, setQuestions] = useState<IQuestion[]>([])

    const redirectPlaying = () => {

        if (categories.filter(c => c.isSelect).length > 0) {
            generateGameAction(questions, navigation, amountOptions, amountQuestions, generateGame, categories)
            return
        }

        navigation.navigate('Categories', {
            isCategory: false
        })
    }

    const redirectCategories = () => {
        navigation.navigate('Categories', {
            isCategory: true
        })
    }

    const redirectOptions = () => {
        navigation.navigate('Options')
    }

    const redirectStatistics = () => {
        navigation.navigate('Statistics')
    }

    useEffect(() => {

        let questionsData: IQuestion[] = []

        const collectionRef = collection(firestore, COLLECTION_QUESTIONS)
        const suscriber = onSnapshot(collectionRef, {
            next: (snapchot) => {
                snapchot.docs.forEach((doc) => {
                    questionsData.push(doc.data() as IQuestion)
                })
            }
        })

        setQuestions(questionsData)

        setTimeout(() => {
            changeLoading(false)
        }, 1850);

        return () => {
            suscriber()
        }
    
    }, [])

    return (
        <View style={homeStyles.containerMenu}>
            <ButtonMenu text='INICIAR' func={redirectPlaying} />
            <ButtonMenu text='CATEGORÍAS' func={redirectCategories} />
            <ButtonMenu text='OPCIONES' func={redirectOptions} />
            <ButtonMenu text='ESTADÍSTICAS' func={redirectStatistics} />
        </View>
    )
}

export default Menu