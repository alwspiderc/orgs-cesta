import React from 'react';
import { FlatList, View, StyleSheet,} from 'react-native';

import Topo from '../../telas/Cesta/componentes/Topo';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';
import Texto from '../../componentes/Texto';

export default function Cesta({ topo, detalhes, itens }) {
    return(
        <>
           <FlatList
                data={itens.lista}
                renderItem= {Item}
                keyExtractor={({nome}) => nome}
                ListHeaderComponent={() => { 
                    return <>
                        <Topo/>
                        <View style={estilos.cesta}>
                            <Detalhes { ...detalhes }/>
                            <Texto style={estilos.titulo}> { itens.titulo } </Texto>
                        </View>
                    </>
                }}
            />
        </>    
    );
}

const estilos = StyleSheet.create({
    titulo: {
        color: '#464646',
        fontWeight: 'bold',
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32,
    },

    cesta: {
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    
})