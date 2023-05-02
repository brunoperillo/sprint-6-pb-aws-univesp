# Avaliação Sprint 6 - Programa de Bolsas Compass UOL / AWS e Univesp

Avaliação da sexta sprint do programa de bolsas Compass UOL para formação em machine learning para AWS.


***

<div align="center">

![capa](https://user-images.githubusercontent.com/117780664/235557259-4fba4e86-5a6d-429d-b524-eecfe3ffaa3e.png)

</div>



## Introdução

Na Sprint 6 estudamos sobre as ferramentas de Machine Learnig na AWS no qual pudemos práticar automatização com Python, o processamento de Linguagem Natural e desenvolvimento AWS com o foco em Severless. 
O desafio nesse projeto é criar um sistema de indexação de mensagens de áudio que utiliza as ferramentas de Machine Learnig na AWS para automatização, transcrição, processamento de Linguagem Natural. 

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

*O que são ASR's ?*

É o reconhecimento Automático de Voz (Automatic Speech Recognition - ASR) é uma tecnologia que converte palavras faladas em texto. 

Com o ASR, a tecnologia de voz pode detectar sons falados e reconhcê-los como palavras. 
Permitindo que os computadores finalmente nos entendam por meio de nossa forma mais natural de comunicação: a fala.

Os computadores podem detectar padrões em formas de onda de áudio, combiná-los com os sons de um determinado idioma e quais palavras falamos. 


Para esse projeto foi criado o html para testar o carregamento de áudio em bucket do Amazon S3 para compreender melhor o funcionamento do serviço AWS Transcribe, dentro do controle da AWS lembre-se de verificar as políticas de acesso do seu bucket e garantir que esteja configurado corretamente para permitir o acesso ao arquivo de áudio. Na pasta assets, encontra-se um pdf para ajudar nas configurações e esse é o [Link do projeto ](http://project-sprint6-group3-site.s3-website-us-east-1.amazonaws.com/)


![Sprint 6 - html - carrega o audio](https://user-images.githubusercontent.com/88354075/235650734-2c54a2af-aaaa-4240-8c39-9da26caaae63.png)



Utilizamos a ferramenta de visualização e análise de dados [Kibana](https://www.elastic.co/pt/kibana/), permiti explorar, visualizar e analisar dados armazenados em um índice do Elasticsearch, que é um mecanismo de busca distribuído e de análise de dados em tempo real.

Embora o Kibana não seja uma ferramenta de processamento de linguagem natural em si, pode ser usado em conjunto com outras ferramentas de PLN para visualizar e analisar dados textuais. 

Com o Kibana, é possível criar painéis interativos e gráficos que ajudam a entender melhor os dados armazenados no Elasticsearch. 

Você pode criar visualizações de dados, como gráficos de barras, tabelas e mapas, e usá-las para montar painéis que permitem que você veja como os dados estão mudando ao longo do tempo. 

Além disso, o Kibana possui recursos avançados de pesquisa, permitindo que você faça consultas complexas para descobrir informações específicas em seus dados, como identificar padrões de linguagem, categorizar documentos em temas específicos e detectar tópicos emergentes. 

O Kibana é frequentemente usado em conjunto com o Elasticsearch e o Logstash, como parte da família Elastic Stack (também conhecida como ELK Stack). O Logstash é responsável por coletar, transformar e enriquecer os dados antes de enviá-los para o Elasticsearch, onde são armazenados e indexados. O Kibana, por sua vez, permite que você visualize e analise esses dados de uma maneira fácil e intuitiva. 

![Sprint 6 - figura 2](https://user-images.githubusercontent.com/88354075/235663551-1a7f56c9-a00b-4a1e-a9c9-973f8bd1db18.png)
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

Realizamos reuniões diárias para planejar o desenvolvimento do projeto, organizamos as tarefas através da ferramenta [Trello](https://trello.com/invite/b/HKSC9nI2/ATTIef8afb2120a03fb385e376cc5dfd627c517F9BB6/sprint-06-grupo-3) e nos reunimos no Teams para resolver alguns problemas juntos. E na ferramenta [Canva](https://www.canva.com/design/DAFe8qbRW4A/6YS02OsFGlkh2_adYpztPA/edit?utm_content=DAFe8qbRW4A&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) trabalhamos com criação de figuras exclusivas para o projeto. 

## Dificuldades 

No primeiro momento em entende as permissões e politicas dentro dos serviços da AWS. 

Identificar as regras de permissoes necessarias que não estavam presentes nos tutoriaise (estas regras estao presentes no PDF disponivel na pasta src/assets/role_politicas_aws)


***



## Desenvolvedores do projeto

| [<img src="https://avatars.githubusercontent.com/u/81330043?v=4" width=115><br><sub>Bernardo Lima</sub>](https://github.com/belima93)| [<img src="https://avatars.githubusercontent.com/u/96358027?v=4"  width=115><br><sub>Diego</sub>](https://github.com/Diegox0301) | [<img src="https://avatars.githubusercontent.com/u/124359272?v=4" width=115><br><sub>Irati Gonçalves Maffra</sub>](https://github.com/IratiMaffra) | [<img src="https://avatars.githubusercontent.com/u/88354075?v=4" width=115><br><sub>Kelly Silva</sub>](https://github.com/KellyPLSilva) | [<img src="https://avatars.githubusercontent.com/u/117780664?v=4" width=115><br><sub>Viviane Alves</sub>](https://github.com/Vivianes86) |
| :---: | :---: | :---: |:---: |:---: |
