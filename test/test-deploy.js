const { ethers } = require("hardhat")
const { expect, assert } = require("chai")


describe("Storedata", () => {

  let StorageFactory, Storage
  beforeEach(async function () {
    StorageFactory = await ethers.getContractFactory("Storedata")
    Storage = await StorageFactory.deploy()
  })

  it("Should start with a favorite number of 0", async function () {
    const currentValue = await Storage.retrieve()
    const expectedValue = "0"
    // assert
    // expect
    assert.equal(currentValue.toString(), expectedValue)
    // expect(currentValue.toString()).to.equal(expectedValue)
  })
  it("Should update when we call store", async function () {
    const expectedValue = "7"
    const transactionResponse = await Storage.store(expectedValue)
    await transactionResponse.wait(1)

    const currentValue = await Storage.retrieve()
    assert.equal(currentValue.toString(), expectedValue)
  })

  it("Should work correctly with the people struct and array", async function () {
    const expectedPersonName = "kirti"
    const expectedFavoriteNumber = "16"
    const transactionResponse = await Storage.addPeople(
      expectedPersonName,
      expectedFavoriteNumber
    )
    await transactionResponse.wait(1)
    const { number, name } = await Storage.people(0)

    assert.equal(name, expectedPersonName)
    assert.equal(number, expectedFavoriteNumber)
  })
})