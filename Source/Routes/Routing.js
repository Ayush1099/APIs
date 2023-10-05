const express=require('express');
const routing=express.Router();
const controller=require('../Controller/UserController');

/** 
 * @swagger 
 * /registerUser: 
 *   post: 
 *     summary: API to add new notes.
 *     description: Creates new data by inserting request data in the MongoDB.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 description: Name of the person
 *                 type: String  
 *                 example: Ayush
 *               emailId:
 *                 description: Email Id of the person
 *                 type: String
 *                 example: aaa@gmail.com
 *               phoneNo:
 *                 description: Phone Number of the person
 *                 type: Integer
 *                 example: 9822386530
 *     responses:  
 *       200: 
 *         description: Date Registered Successfully  
 */ 
routing.post('/registerUser',controller.RegisterUser)

/** 
 * @swagger 
 * /getUser/{userId}: 
 *   get: 
 *     summary: API to update existing notes..
 *     description: Fetches Data from MongoDB as per userId provided. 
 *     parameters: 
 *     - name: userId 
 *       in: path
 *       description: UserId to retrieve the user
 *       required: true 
 *       schema:
 *          type: integer 
 *          example: 578
 *     responses:  
 *       200: 
 *         description: Success  
 *         content:
 *              application/json:
 *                  schema:
 *                     type: object
 *                     properties:
 *                         status:
 *                           type: string
 *                         data:
 *                           type: array
 *                           items:
 *                             type: object
 *                             properties:       
 *                                userId:
 *                                   type: string
 *                                name:
 *                                   type: string
 *                                emailId:
 *                                   type: string
 *                                phoneNo:
 *                                   type: number
 */
routing.get('/getUser/:userId',controller.GetUser)

module.exports = routing;