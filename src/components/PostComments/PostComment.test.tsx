import { fireEvent, render, screen } from "@testing-library/react"
import PostComments from "."

describe('Testando o modulo', () => {
    it('Deve renderizar pelo menos dois comentários', () => {
        const { debug } = render(<PostComments />)

        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'teste1',
            }
        });
        fireEvent.click(screen.getByTestId('btn-comentar'))
        

        fireEvent.change(screen.getByTestId('textarea-comentario'), {
            target: {
                value: 'teste2',
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))


        debug()
        expect(screen.getAllByTestId('comentario-post')).toHaveLength(2)
    })
})