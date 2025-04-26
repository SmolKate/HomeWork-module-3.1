This project was performed using TypeScript.

# Run project

It is neseccary to perform the following command `tsc` and `node app-normalize-data` in order to start the project.

# Project target

This project was carried out for educational purposes. It was necessary to implement the function which normalizes the recieved data to the following type:
```
{
    byId: {
        62e69d5a5458aac0ed320b35: { id: '...', title: '...', body: '...' },
        62e69d5a5458aac0ed320b1c: { id: '...', title: '...', body: '...' },
        ...
    },
    allIds: ['62e69d5a5458aac0ed320b35', '62e69d5a5458aac0ed320b1c', ...]
}
```