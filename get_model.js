// export function getModelByVersion(modelVersions, versionCode) {
//     return modelVersions.filter(
//         function (modelVersions) {
//             if (modelVersions.versionCode == versionCode) {
//                 return modelVersions.model_link
//             }
//         }
//     );
// }

export function getModelByVersion(modelVersions, versionCode) {

    for (var i = 0; i < modelVersions.length; i++) {
        if (modelVersions[i].model_version == versionCode) {
            return modelVersions[i].model_link;
        }
    }
}