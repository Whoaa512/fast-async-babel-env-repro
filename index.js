import 'nodent-runtime'

const identity = (x) => {
    console.log(x)
    return x
}
const dbClient = () => new Promise((fill, fail) => { setTimeout(() => fill(['results']), 10) } )

export async function geneByName(event, context, callback) {
    const { name } = event.pathParameters
    // Need to call .then so that the query will kick off
    const genes = await dbClient(TABLE_NAME)
        .then(identity)
    return genes
}
