import {ListCard} from '../ListCard'

export const ListRender = ({ list }) => {
    if(list?.lenght === 0){
        return(
            <h3>
                Sua lista esta vazia, clique no botão "Adicionar" para incluir novos itens
            </h3>
        );
    }

    return(
        <div>
            {list.map((item) => (
                <ListCard item={item} key={item?._id} />
            ))};
        </div>
    );
};