# Avaliação Sprint 6 - Programa de Bolsas Compass UOL / AWS e Univesp

Avaliação da [sexta sprint][sprint6main] do programa de bolsas [Compass UOL][compass] para formação em machine learning para [AWS][aws].
***

# Sistema de indexação de mensagens de áudio com AWS

Este é um sistema de indexação de mensagens de áudio, que utiliza ferramentas AWS, como Amazon Transcribe, Amazon Comprehend e Elasticsearch. O objetivo do sistema é permitir a indexação de mensagens de áudio em um banco de dados.


***
## Funcionamento
O sistema funciona da seguinte forma:

1. O usuário grava uma mensagem de áudio ou faz upload de um arquivo de áudio existente.
2. O áudio é enviado para o Amazon S3 para armazenamento.
3. O Amazon Transcribe é utilizado para transcrever o áudio em texto.
4. O texto transcrito é enviado para o Amazon Comprehend, que analisa o texto e extrai informações relevantes, como entidades e sentimentos.
5. Os dados extraídos do texto são indexados no Elasticsearch.
6. O usuário pode realizar uma pesquisa no sistema para encontrar mensagens de áudio relevantes com base em palavras-chave, entidades ou sentimentos.

# Pré-requisitos e limitações
- Antes de iniciar a configuração do sistema, é necessário ter uma conta AWS ativa e configurada.
- Certifique-se de que o arquivo esteja no formato FLAC, MP3, MP4, Ogg, Webm, AMR ou WAV.
- O arquivo de deve ter menos de 4 horas de duração e menos de 2 gb de tamanho.


## Ambiente
O projeto foi desenvolvido utilizando o ambiente AWS. Os seguintes serviços da AWS foram usados:

- Amazon S3: para armazenar os dados





## Arquivos do Projeto
- README.md: Este arquivo README.
- ThreelittlePigs-example_pt-BR.mp3: Arquivo de áudio utilizado para teste.
- transcribe-ThreelittlePigs-example.json: Arquivo JSON com as transcrições obtidas apartir do áudio enviado (ThreelittlePigs-example_pt-BR.mp3).

## Como Executar o Projeto
- XXXXXXX.
- XXXXXXX.
- XXXXXXX.

## Referências
- XXXXXXX.
- XXXXXXX.


## Dificuldades
- XXXXXXX.
- XXXXXX.

***


## Desenvolvedores do projeto
| [<img src="https://avatars.githubusercontent.com/u/97908745?v=4" width=115><br><sub>Ana Vitória Louro Navili</sub>](https://github.com/anaVitoriaLouro)|  [<img src="https://avatars.githubusercontent.com/u/112827096?v=4" width=115><br><sub>Barbara Haydee Presente</sub>](https://github.com/Barbarahayd) |[<img src="https://avatars.githubusercontent.com/u/25699466?v=4" width=115><br><sub>Bruno Monserrat Perillo</sub>](https://github.com/brunoperillo) | [<img src="https://avatars.githubusercontent.com/u/87142990?v=4" width=115><br><sub>Luciene Godoy</sub>](https://github.com/LucieneGodoy) | [<img src="https://avatars.githubusercontent.com/u/72028902?v=4" width=115><br><sub>Luiz Renato Sassi</sub>](https://github.com/luizrsassi) |
| :---: | :---: | :---: |:---: |:---: |


***
   [kernel]: <https://pt.wikipedia.org/wiki/N%C3%BAcleo_(sistema_operacional)>
   [compass]: <https://compass.uol/en/home/>
   [aws]: <https://aws.amazon.com/pt/>
   [sprint6main]: <https://github.com/Compass-pb-aws-2023-Univesp/sprint-6-pb-aws-univesp/tree/main>
   [endpoint]: <http://54.163.32.88:9000/>

