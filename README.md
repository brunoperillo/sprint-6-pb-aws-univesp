# Avaliação Sprint 6 - Programa de Bolsas Compass UOL / AWS e Univesp

Avaliação da sexta sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.


***

<div align="center">

![capa](https://user-images.githubusercontent.com/117780664/235557259-4fba4e86-5a6d-429d-b524-eecfe3ffaa3e.png)

</div>



## Introdução

O sistema de indexação de mensagens de áudio utiliza as ferramentas de Machine Learnig na AWS para automatização, transcrição, processamento de Linguagem Natural. 

## Objetivo

Desenvolver um sistema para indexação de mensagens de áudio com ferramentas AWS.


## Descrição do projeto

Esse projeto tem como referência o tutorial apresentado na [Sprint 6](https://github.com/Compass-pb-aws-2023-Univesp/sprint-6-pb-aws-univesp/tree/main), no qual seguimos os passos para realizar o deploy, adaptar e configurar os serviços*Amazon S3, Lambda, Transcribe, Comprehend, Elasticsearch, Step Function e Cognito.*

Para transcrever um arquivo de áudio, o grupo irá usar o Amazon Transcribe que utiliza três API's

* StartTranscriptionJob - inicia um trabalho em lote para transcrever a fala em um arquivo de áudio para texto. 

* ListTranscriptionJob - retorna uma lista de jobs de transcrição que foram iniciados. 

* GetTranscriptionJob - Retorna o resultado de um trabalho de transcrição. 

A resposta contém um link para um arquivo JSON contendo os resultados. 

Nesse projeto fizemos alguns áudios em mp3 no site [Tree TTS](https://freetts.com/) para testar e criar os arquivos json disponíveis na pasta transcribe.
![arquitetura](https://user-images.githubusercontent.com/117780664/235559640-e7446034-2217-445c-bc92-17aa2b346e26.png) 

* O que são ASR's ?

É o reconhecimento Automático de Voz (Automatic Speech Recognition - ASR) é uma tecnologia que converte palavras faladas em texto. 

Com o ASR, a tecnologia de voz pode detectar sons falados e reconhcê-los como palavras. 
Permitindo que os computadores finalmente nos entendam por meio de nossa forma mais natural de comunicação: a fala.

Os computadores podem detectar padrões em formas de onda de áudio, combiná-los com os sons de um determinado idioma e quais palavras falamos. 

![Users](https://user-images.githubusercontent.com/117780664/235557543-bc4dc61c-88b8-443b-9743-44e81141d94a.png)

## Funcionamento

1. O usuário acessa a interface online para fazer upload de um arquivo de áudio.
2. O arquivo de áudio é enviado para o Amazon S3 para armazenamento.
3. A função Lambda envia o arquivo armazenado no bucket para o Amazon Transcribe.
4. O Amazon Transcribe faz a transcrição do arquivo de áudio em texto e gera um arquivo do tipo JSON.
5. O arquivo de texto é enviado para o Amazon Comprehend por meio de uma função Lambda
6. O Amazon Comprehend analisa o texto e extrai dados de acordo com as configurações.
7. Os dados extraídos do texto são indexados no Amazon Opensearch.
8. O usuário realiza pesquisa no sistema com as permissões concedidas pelo Amazon Cognito para acessar o Kibana.
9. O Kibana trabalha com o Elastic Stack, fornecendo funcionalidades de busca e visualização de dados indexados no Opensearch.
10. O fluxo de trabalho é definido no Step Function.


## Organização da equipe para o desenvolvimento do projeto. 

Realizamos reuniões diárias para planejar o desenvolvimento do projeto, organizamos as tarefas através da ferramenta [Trello](https://trello.com/invite/b/HKSC9nI2/ATTIef8afb2120a03fb385e376cc5dfd627c517F9BB6/sprint-06-grupo-3) e se reunimos no Teams para resolver alguns problemas juntos. E na ferramenta [Canva](https://www.canva.com/design/DAFe8qbRW4A/6YS02OsFGlkh2_adYpztPA/edit?utm_content=DAFe8qbRW4A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) trabalhamos com criação de figuras exclusivas para o projeto. 

## Dificuldades 

No primeiro momento em entende as permissões e politicas dentro dos serviços da AWS. 


***



## Desenvolvedores do projeto

| [<img src="https://avatars.githubusercontent.com/u/81330043?v=4" width=115><br><sub>Bernardo Lima</sub>](https://github.com/belima93)| [<img src="https://avatars.githubusercontent.com/u/96358027?v=4"  width=115><br><sub>Diego</sub>](https://github.com/Diegox0301) | [<img src="https://avatars.githubusercontent.com/u/124359272?v=4" width=115><br><sub>Irati Gonçalves Maffra</sub>](https://github.com/IratiMaffra) | [<img src="https://avatars.githubusercontent.com/u/88354075?v=4" width=115><br><sub>Kelly Silva</sub>](https://github.com/KellyPLSilva) | [<img src="https://avatars.githubusercontent.com/u/117780664?v=4" width=115><br><sub>Viviane Alves</sub>](https://github.com/Vivianes86) |
| :---: | :---: | :---: |:---: |:---: |
