import * as PetModel from './../models/petsModel.js'

export const listarTodos = async (requestAnimationFrame, res) => {
    try {
        const pets = await PetModel.findAll();

        if(!pets || pets.length === 0) {
            res.status(404).json({
                total:length,
                mensagem: ' Não há pets na lista',
                pets
            })
        }

        res.status(200).json({
            total: pets.length,
            mensagem: 'Lista de pets',
            pets
        })
    } catch (error) {
        res.status(500).json({
            erro: 'erro interno de servidor',
            detalhe: error.message,
            status: 500    
         })
    }
}

export const listarUm = async (req,res) => {
    try {
        const id = req.params.id;
        const pet = await PetModel.findById(id);

        if (!pet) {
            return res.status(404).json({
                erro: 'Pet não encontrado!',
                message: 'Verifique se o id do pet existe',
                id: id
            })
        }

        res.status(200).json({
            message: 'Pet encontrado',
            pet
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao buscar pet por id',
            detalhes: error.message
        })
    }
}
export const criar = async (req, res) => {
    try {
       
        const { nome, especie, idade, dono } = req.body

        const dado = req.body

        const camposObrigatorios = ['nome', 'especie', 'idade', 'dono'];

        const faltando = camposObrigatorios.filter(campo => !dado[campo]);

        if (faltando.length > 0) {
            return res.status(400).json({
                erro: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}.`
            });
        }

       
        const especiesValidas = ['Cachorro', 'Gato', 'Passáro', 'Coelho'];
        if (!especiesValidas.includes(pet)) {
            return res.status(400).json({
                erro: 'especies Inválidas!',
                especiesValidas
            })
        }

        const novoPet = await PetModel.create(dado);

        res.status(201).json({
            mensagem: 'Pet criado com sucesso!',
            bruxo: novoPet
        })


    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao criar pet',
            detalhes: error.message
        })
    }
}

export const apagar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const petExiste = await PetModel.findById(id);

        if (!petExiste) {
            return res.status(404).json({
                erro: 'Pet não encontrado com esse id',
                id: id
            })
        }

        await PetModel.deletePet(id)

        res.status(200).json({
            mensagem: 'Pet removido com sucesso',
            petRemovido: petExiste
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao apagar pet!',
            detalhes: error.message
        })
    }
}

export const atualizar = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const dados = req.body;

        const petExiste = await PetModel.findById(id);

        if (!petExiste) {
            return res.status(404).json({
                erro: 'Pet não encontrado com esse id',
                id: id
            })
        }

        if (dados.especie) {
            const especiesValidas = ['Cachorro', 'Gato', 'Passáro', 'Coelho'];
            if (!especiesValidas.includes(dados.especie)) {
                return res.status(400).json({
                    erro: 'espécie inválida!',
                    especiesValidas
                })
            }
        }
       
        const petAtualizado = await PetModel.update(id, dados);

        res.status(200).json({
            mensagem: 'Pet atualizado com sucesso',
            Pet: petAtualizado
        })

    } catch (error) {
        res.status(500).json({
            erro: 'Erro ao atualizar pets',
            detalhes: error.message
        })
    }
}